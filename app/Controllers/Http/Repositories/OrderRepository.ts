import OrderRepositoryInterface from 'App/Controllers/Http/Interfaces/OrderRepositoryInterface'
import Order from "App/Models/Order";

export default class OrderRepository implements OrderRepositoryInterface {
  // public async createOrder(newOrder: {}): Promise<boolean> {
  //   const order = await Order.create(newOrder)
  //   return Promise.resolve(order.$isPersisted)
  // }
  //
  // public async deleteOrder(orderId: string): Promise<any> {
  //   const order = await Order.findOrFail(orderId)
  //   await order.delete()
  //   return Promise.resolve(order)
  // }

  public async getAllOrders(): Promise<any> {
    const orders = await Order.all()
    return Promise.resolve(orders)
  }

  // public async getFulfilledOrders(): Promise<any> {
  //   const orders = await Order.query().where('is_fulfilled', true)
  //   return Promise.resolve(orders)
  // }
  //
  // public async getOrderById(orderId: string): Promise<any> {
  //   const order = await Order.findOrFail(orderId)
  //   return Promise.resolve(order)
  // }
  //
  // public async updateOrder(orderId: string, updatedOrder: {}): Promise<any> {
  //   const order = await Order.findOrFail(orderId)
  //   await order.merge(updatedOrder).save()
  //   return Promise.resolve(order)
  // }
}
