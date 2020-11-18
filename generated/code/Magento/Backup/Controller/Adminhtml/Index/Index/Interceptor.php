<?php
namespace Magento\Backup\Controller\Adminhtml\Index\Index;

/**
 * Interceptor class for @see \Magento\Backup\Controller\Adminhtml\Index\Index
 */
class Interceptor extends \Magento\Backup\Controller\Adminhtml\Index\Index implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Backend\App\Action\Context $context, \Magento\Framework\Registry $coreRegistry, \Magento\Framework\Backup\Factory $backupFactory, \Magento\Framework\App\Response\Http\FileFactory $fileFactory, \Magento\Backup\Model\BackupFactory $backupModelFactory, \Magento\Framework\App\MaintenanceMode $maintenanceMode, ?\Magento\Backup\Helper\Data $helper = null)
    {
        $this->___init();
        parent::__construct($context, $coreRegistry, $backupFactory, $fileFactory, $backupModelFactory, $maintenanceMode, $helper);
    }

    /**
     * {@inheritdoc}
     */
    public function execute()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'execute');
        if (!$pluginInfo) {
            return parent::execute();
        } else {
            return $this->___callPlugins('execute', func_get_args(), $pluginInfo);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function dispatch(\Magento\Framework\App\RequestInterface $request)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'dispatch');
        if (!$pluginInfo) {
            return parent::dispatch($request);
        } else {
            return $this->___callPlugins('dispatch', func_get_args(), $pluginInfo);
        }
    }
}
