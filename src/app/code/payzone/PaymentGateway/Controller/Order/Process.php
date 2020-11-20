<?php

if (interface_exists("\Magento\Framework\App\CsrfAwareActionInterface"))
    include __DIR__ . "/Process.m230.php";
else
    include __DIR__ . "/Process.m220.php";
