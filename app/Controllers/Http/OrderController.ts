import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import OrderService from '@ioc:Order/OrderService'

export default class OrderController {

  public async index({ response }: HttpContextContract) {
    const orders = await OrderService.getAllOrders()

    return response.json({
      status: StatusCodes.OK,
      reason: ReasonPhrases.OK,
      data: orders,
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const title = request.input('title')
    const description = request.input('description')
    const order = await OrderService.createOrder({ title: title, description: description })

    return response.json({
      status: StatusCodes.OK,
      reason: ReasonPhrases.OK,
      data: order,
    })
  }

  public async show({ request, response }: HttpContextContract) {
    const id = request.param('id')
    const order = await OrderService.getOrderById(id)

    return response.json({
      status: StatusCodes.OK,
      reason: ReasonPhrases.OK,
      data: order,
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const orderId = request.param('id')
    const title = request.input('title')
    const description = request.input('description')
    const order = await OrderService.updateOrder(orderId, { title: title, description: description })

    return response.json({
      status: StatusCodes.OK,
      reason: ReasonPhrases.OK,
      data: order,
    })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id = request.param('id')
    const order = await OrderService.deleteOrder(id)

    return response.json({
      status: StatusCodes.OK,
      reason: ReasonPhrases.OK,
      data: order,
    })
  }
}
