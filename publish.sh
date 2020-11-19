#/bin/bash

rm -rf piracy-geek
npm run build

mv dist piracy-geek

LOCAL_DIR=piracy-geek/
SERVER=root@111.229.14.189:/root/webapps/piracy-geek
rsync -v   --progress --stats -r -t -p -l -z -e 'ssh -p 22' --delete  $LOCAL_DIR  $SERVER
