#/bin/bash

rm -rf piracy-geek
npm run build

mv dist piracy-geek

LOCAL_DIR=piracy-geek/
SERVER=root@10.4.7.13:/root/webapps/piracy-geek
rsync -v   --progress --stats -r -t -p -l -z -e 'ssh -p 22' --delete  $LOCAL_DIR  $SERVER
