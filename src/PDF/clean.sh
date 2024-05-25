#!/bin/bash

# Path to the file to monitor for changes
file_to_monitor="*.tex"

# Start an infinite loop to monitor the file for changes
while true; do
    # Use inotifywait to wait for changes to the file
    inotifywait -e modify "$file_to_monitor"

    # When the file changes, delete files in the specified directory
    # Replace the following line with the specific deletion command you need
    find "David_Brockbank_CV*" -maxdepth 1 -type f ! -name "*.tex" -delete
done
