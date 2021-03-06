#!/usr/bin/env sh
#!/bin/bash

# chmod +xrw ./script/private/user/kevin-nicks/non_proxy_push.sh

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

echo "\n\n<Automated Execution Command 🕐  $(date +%00000:%S)>:  \$>_  📡   Update Information  🔍"
git add . 
echo "\n"

echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  💬   Commit Information  📲\n"
git commit -m "Automation Build We Cloud Dance"
echo "\n"

echo "\n\n<Automated Execution Command 🕐  $(date +%00000:%S)>:  \$>_  🔐   UnSet Proxy -> HTTP  🔓 "
git config --global --unset http.proxy
sleep 1
echo "\n"

echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  🔐   UnSet Proxy -> HTTPS  🔓  \n"
git config --global --unset https.proxy
sleep 2
echo "\n"

echo "\n<Automated Execution Command 🕒  $(date +%00000:%S)>:  \$>_  📮   Push 'We Cloud Dance' | Dev Branch  📤\n"
git push origin dev
sleep 2
echo "\n"

echo "\n<Automated Execution Command 🕓  $(date +%00000:%S)>:  \$_>  🌈   Checkout 'Main' Branch  🕹\n"
git checkout main
sleep 2
echo "\n"

echo "\n<Automated Execution Command 🕔  $(date +%00000:%S)>:  \$>_  📬   Merge 'Dev' Branch  📤 \n"
git merge dev
echo "\n"

echo "\n\n<Automated Execution Command 🕐  $(date +%00000:%S)>:  \$>_  🔐   UnSet Proxy -> HTTP  🔓 "
git config --global --unset http.proxy
echo "\n"

echo "\n<Automated Execution Command 🕑  $(date +%00000:%S)>:  \$_>  🔐   UnSet Proxy -> HTTPS  🔓  \n"
git config --global --unset https.proxy
echo "\n"

echo "\n<Automated Execution Command 🕕  $(date +%00000:%S)>:  \$_>  🚀   Push 'We Cloud Dance' | Main Branch  🏆\n"
git push origin main
sleep 2
echo "\n"+

echo "\n<Automated Execution Command 🕖  $(date +%00000:%S)>:  \$>_  🤫   Checkout 'Dev' Branch  🏁\n"
git checkout dev
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
