zip -r function.zip .
aws lambda update-function-code --function-name letterboxd-diary-upload --zip-file fileb://function.zip