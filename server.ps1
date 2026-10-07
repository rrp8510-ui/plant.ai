$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "FloraPulse server listening at http://localhost:$port/"

    $baseDir = $PSScriptRoot

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq '/' -or [string]::IsNullOrEmpty($urlPath)) {
            $urlPath = '/index.html'
        }

        $localPath = Join-Path $baseDir ($urlPath.TrimStart('/'))

        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = 'text/plain'
            if ($ext -eq '.html') { $mime = 'text/html; charset=utf-8' }
            elseif ($ext -eq '.css') { $mime = 'text/css; charset=utf-8' }
            elseif ($ext -eq '.js') { $mime = 'application/javascript; charset=utf-8' }
            elseif ($ext -eq '.json') { $mime = 'application/json; charset=utf-8' }
            elseif ($ext -eq '.png') { $mime = 'image/png' }
            elseif ($ext -eq '.jpg') { $mime = 'image/jpeg' }
            elseif ($ext -eq '.svg') { $mime = 'image/svg+xml' }

            $response.ContentType = $mime
            $response.AddHeader('Access-Control-Allow-Origin', '*')

            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = 'File not found'
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.Close()
    }
}
finally {
    $listener.Stop()
}
