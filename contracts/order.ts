declare module '@ioc:Order/OrderService' {
  import OrderInterface from 'App/Controllers/Http/Interfaces/OrderRepositoryInterface'
  const OrderService: OrderInterface
  export default OrderService
}
