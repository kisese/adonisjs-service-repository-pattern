export default interface OrderRepositoryInterface {
  getAllOrders(): Promise<any>

  getOrderById(orderId: string): Promise<any>

  deleteOrder(orderId: string): Promise<any>

  createOrder(newOrder: {}): Promise<boolean>

  updateOrder(orderId: string, updatedOrder: {}): Promise<any>

  getFulfilledOrders(): Promise<any>
}
