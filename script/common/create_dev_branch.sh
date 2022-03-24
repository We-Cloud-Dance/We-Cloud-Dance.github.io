#!/usr/bin/env sh
#!/bin/bash

# chmod +xrw ./script/common/create_dev_branch.sh

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

#echo "\n\n<Automated Execution Command 🕐  $(date +%00000:%S)>:  \$>_  🔐   UnSet Proxy -> HTTP  🔓 "
#git config --global --unset http.proxy
#sleep 1
#echo "\n"

#echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  🔐   UnSet Proxy -> HTTPS  🔓  \n"
#git config --global --unset https.proxy
#sleep 2
#echo "\n"

echo "\n\n<Automated Execution Command 🕐  $(date +%00000:%S)>:  \$>_  ⚠️   Create Locally And Switch To The 'We Cloud Dance' | Dev Branch  ✅  "
git checkout -b dev
sleep 1
echo "\n"

echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  💬   Submit The Local 'Dev' Branch To The Remote Bran  📲\n"
git add .
git commit -m "Success Build We Cloud Dance Dev Branch"
sleep 2
echo "\n"

echo "\n<Automated Execution Command 🕒  $(date +%00000:%S)>:  \$>_  📮   Synchronize The Local 'Dev' Branch To The Remote Warehouse  📤\n"
git push origin dev
sleep 2
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