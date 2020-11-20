<?php
namespace Magento\Quote\Model\Quote\TotalsCollector;

/**
 * Interceptor class for @see \Magento\Quote\Model\Quote\TotalsCollector
 */
class Interceptor extends \Magento\Quote\Model\Quote\TotalsCollector implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Quote\Model\Quote\Address\Total\Collector $totalCollector, \Magento\Quote\Model\Quote\Address\Total\CollectorFactory $totalCollectorFactory, \Magento\Framework\Event\ManagerInterface $eventManager, \Magento\Store\Model\StoreManagerInterface $storeManager, \Magento\Quote\Model\Quote\Address\TotalFactory $totalFactory, \Magento\Quote\Model\Quote\TotalsCollectorList $collectorList, \Magento\Quote\Model\ShippingFactory $shippingFactory, \Magento\Quote\Model\ShippingAssignmentFactory $shippingAssignmentFactory, \Magento\Quote\Model\QuoteValidator $quoteValidator)
    {
        $this->___init();
        parent::__construct($totalCollector, $totalCollectorFactory, $eventManager, $storeManager, $totalFactory, $collectorList, $shippingFactory, $shippingAssignmentFactory, $quoteValidator);
    }

    /**
     * {@inheritdoc}
     */
    public function collect(\Magento\Quote\Model\Quote $quote)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'collect');
        if (!$pluginInfo) {
            return parent::collect($quote);
        } else {
            return $this->___callPlugins('collect', func_get_args(), $pluginInfo);
        }
    }
}
