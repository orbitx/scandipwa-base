<?php
namespace Magento\InventoryAdminUi\Controller\Adminhtml\Source\InlineEdit;

/**
 * Interceptor class for @see \Magento\InventoryAdminUi\Controller\Adminhtml\Source\InlineEdit
 */
class Interceptor extends \Magento\InventoryAdminUi\Controller\Adminhtml\Source\InlineEdit implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Backend\App\Action\Context $context, \Magento\Framework\Api\DataObjectHelper $dataObjectHelper, \Magento\InventoryApi\Api\SourceRepositoryInterface $sourceRepository, \Magento\InventoryAdminUi\Model\Source\SourceCoordinatesDataProcessor $sourceCoordinatesDataProcessor)
    {
        $this->___init();
        parent::__construct($context, $dataObjectHelper, $sourceRepository, $sourceCoordinatesDataProcessor);
    }

    /**
     * {@inheritdoc}
     */
    public function execute() : \Magento\Framework\Controller\ResultInterface
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
