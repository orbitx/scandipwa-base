<?php
namespace Magento\Sitemap\Controller\Adminhtml\Sitemap\Generate;

/**
 * Interceptor class for @see \Magento\Sitemap\Controller\Adminhtml\Sitemap\Generate
 */
class Interceptor extends \Magento\Sitemap\Controller\Adminhtml\Sitemap\Generate implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Backend\App\Action\Context $context, \Magento\Store\Model\App\Emulation $appEmulation)
    {
        $this->___init();
        parent::__construct($context, $appEmulation);
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
