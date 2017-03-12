---
layout: post
title: 給 nginx 和 php-fpm 的 AppArmor 設定檔
category: 電腦
tags: Linux nginx Ubuntu
uuid: 5f16f866-f5a0-41a8-93f5-7453773b279b
---
[AppArmor][AppArmor] 是 Ubuntu 預設的 [MAC][MAC] 模組。不像傳統 Unix 的
[DAC][DAC]，AppArmor 設定檔列出什麼是行程*該*存取的。處於**強制模式**
(**enforce**d) 的行程只能存取已列舉的路徑。處於**抱怨模式** (**complain**ing)

然而 [nginx][nginx] 和 [php-fpm][php-fpm]
沒有預設的設定檔。為了避免網頁伺服器遭駭造成*系統性感染*，自己的設定檔自己寫！我們有
`aa-genprof` 這個有用的工具完成大部份的工作，但是它還是會遺漏一些路徑，特別是
sockets。因此我把我的設定檔放上來作為他山之石。

* 網站根目錄位於 /srv/www/\*/.
* 比起 [TCP sockets][network]，我更喜歡 [Unix domain sockets][unix]。
* 其他都是 Ubuntu 的預設值。

*[MAC]: mandatory access control
*[DAC]: discretionary access control

[AppArmor]: https://en.wikipedia.org/wiki/AppArmor
[DAC]:      https://en.wikipedia.org/wiki/Discretionary_access_control
[MAC]:      https://en.wikipedia.org/wiki/Mandatory_access_control
[network]:  https://en.wikipedia.org/wiki/Network_socket
[nginx]:    http://nginx.org/
[php-fpm]:  http://php-fpm.org/
[unix]:     https://zh.wikipedia.org/wiki/Unix_domain_socket

以下是 nginx 的設定檔。

	#include <tunables/global>

	/usr/sbin/nginx {
		#include <abstractions/apache2-common>
		#include <abstractions/base>
		#include <abstractions/nis>

		capability dac_override,
		capability net_bind_service,
		capability setgid,
		capability setuid,

		/etc/nginx/** r,
		/etc/ssl/openssl.cnf r,
		/proc/*/auxv r,
		/run/nginx.pid rw,
		/run/nginx.pid.oldbin w,
		/run/php5-fpm.sock rw,
		/srv/www/** r,
		/usr/sbin/nginx mr,
		/var/log/nginx/* w,
	}

以下是 php-fpm 的設定檔。

	#include <tunables/global>

	/usr/sbin/php5-fpm {
		#include <abstractions/base>
		#include <abstractions/nameservice>
		#include <abstractions/php5>

		capability kill,
		capability setgid,
		capability setuid,

		/etc/php5/** r,
		/proc/*/auxv r,
		/proc/sys/kernel/ngroups_max r,
		/run/mysqld/mysqld.sock rw,
		/run/php5-fpm.pid rw,
		/run/php5-fpm.sock w,
		/srv/www/** r,
		/srv/www/html/wp-content/** rw,
		/srv/www/html/wp-content/cache/** rwk,
		/srv/www/magento/media/** rw,
		/srv/www/magento/var/** rwk,
		/tmp/ r,
		/tmp/** rwk,
		/usr/sbin/php5-fpm mrix,
		/var/log/php5-fpm.log* w,
	}
