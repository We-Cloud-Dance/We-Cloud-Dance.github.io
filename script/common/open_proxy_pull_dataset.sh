#!/usr/bin/env sh
#!/bin/bash

# chmod +xrw ./script/common/open_proxy_pull_dataset.sh

echo "
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│									   	 		  		   	     │
│   WELCOME BACK                                                                                                             │
│									   	 		  		   	     │
│   ██╗    ██╗███████╗     ██████╗██╗      ██████╗ ██╗   ██╗██████╗     ██████╗  █████╗ ███╗   ██╗ ██████╗███████╗           │
│   ██║    ██║██╔════╝    ██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗    ██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝           │
│   ██║ █╗ ██║█████╗      ██║     ██║     ██║   ██║██║   ██║██║  ██║    ██║  ██║███████║██╔██╗ ██║██║     █████╗             │
│   ██║███╗██║██╔══╝      ██║     ██║     ██║   ██║██║   ██║██║  ██║    ██║  ██║██╔══██║██║╚██╗██║██║     ██╔══╝             │
│   ╚███╔███╔╝███████╗    ╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝    ██████╔╝██║  ██║██║ ╚████║╚██████╗███████╗           │
│    ╚══╝╚══╝ ╚══════╝     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝           │
│									   	 		  		   	     │
│                  	      -- ☁️ 💃 WE CLOUD DANCE - MAKE EVERY ACTIONS ACCOUNTABLE. 🍻 🗽 --                              │
│									   	 		  		   	     │
│                              :: REMOTE USA FOR ANON SYS, Inc. - VERSION (V27.2.5-SNAPSHOT) ::                              │
│									   	 		  		   	     │
└───────────────────────────────────────────── (START AUTOMATED BUILD SERVICE) ──────────────────────────────────────────────┘
"

echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  🔐   UnSet Proxy -> OpenSSL  🔓  \n"
git config --global http.sslBackend "openssl"
#sleep 3
echo "\n"

echo "\n\n<Automated Execution Command 🕐  $(date +%00000:%S)>:  \$>_  ♻️   Pull 'We Cloud Dance' | Dev Branch DataSet  🔐  "
git pull
#sleep 1
echo "\n"

echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  🛠   Checkout 'Main' Branch  📲\n"
git checkout main
#sleep 1
echo "\n"

echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  📥   Pull 'We Cloud Dance' | Main DataSet  📥\n"
git pull
#sleep 2
echo "\n"

echo "\n<Automated Execution Command 🕒  $(date +%00000:%S)>:  \$>_  🔓   Checkout 'Dev' Branch  🔒\n"
git checkout dev
#sleep 2
echo "\n\n 🍻  Back - We Cloud Dance - Make Every Actions Accountable."

echo "
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│									   	 		  		   	     │
│   WELCOME BACK                                                                                                             │
│									   	 		  		   	     │
│   ██╗    ██╗███████╗     ██████╗██╗      ██████╗ ██╗   ██╗██████╗     ██████╗  █████╗ ███╗   ██╗ ██████╗███████╗           │
│   ██║    ██║██╔════╝    ██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗    ██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝           │
│   ██║ █╗ ██║█████╗      ██║     ██║     ██║   ██║██║   ██║██║  ██║    ██║  ██║███████║██╔██╗ ██║██║     █████╗             │
│   ██║███╗██║██╔══╝      ██║     ██║     ██║   ██║██║   ██║██║  ██║    ██║  ██║██╔══██║██║╚██╗██║██║     ██╔══╝             │
│   ╚███╔███╔╝███████╗    ╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝    ██████╔╝██║  ██║██║ ╚████║╚██████╗███████╗           │
│    ╚══╝╚══╝ ╚══════╝     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝           │
│									   	 		  		   	     │
│                  	      -- ☁️ 💃 WE CLOUD DANCE - MAKE EVERY ACTIONS ACCOUNTABLE. 🍻 🗽 --                              │
│									   	 		  		   	     │
│                              :: REMOTE USA FOR ANON SYS, Inc. - VERSION (V27.2.5-SNAPSHOT) ::                              │
│									   	 		  		   	     │
└────────────────────────────────────────────── (END AUTOMATED BUILD SERVICE) ───────────────────────────────────────────────┘
"