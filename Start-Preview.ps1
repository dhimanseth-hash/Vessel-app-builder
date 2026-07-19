$python = "C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
$port = 4173

Write-Host "Starting Vessel Consistency Checker..."
Write-Host "Open http://localhost:$port"
& $python -m http.server $port

