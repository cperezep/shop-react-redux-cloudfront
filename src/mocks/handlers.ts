import { rest } from 'msw';
import API_PATHS from '~/constants/apiPaths';
import { availableProducts, cart, orders, products } from '~/mocks/data';
import type { CartItem } from '~/models/CartItem';
import type { Order } from '~/models/Order';
import type { AvailableProduct, Product } from '~/models/Product';

export const handlers = [
  rest.get(`${API_PATHS.bff}/product`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(), ctx.json<Product[]>(products));
  }),
  rest.put(`${API_PATHS.bff}/product`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete(`${API_PATHS.bff}/product/:id`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${API_PATHS.bff}/product/available`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(), ctx.json<AvailableProduct[]>(availableProducts));
  }),
  rest.get(`${API_PATHS.bff}/product/:id`, (req, res, ctx) => {
    const product = availableProducts.find((p) => p.id === req.params.id);
    if (!product) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.delay(), ctx.json<AvailableProduct>(product));
  }),
  rest.get(`${API_PATHS.cart}/profile/cart`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(), ctx.json<CartItem[]>(cart));
  }),
  rest.put(`${API_PATHS.cart}/profile/cart`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${API_PATHS.order}/order`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(), ctx.json<Order[]>(orders));
  }),
  rest.put(`${API_PATHS.order}/order`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${API_PATHS.order}/order/:id`, (req, res, ctx) => {
    const order = orders.find((p) => p.id === req.params.id);
    if (!order) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.delay(), ctx.json(order));
  }),
  rest.delete(`${API_PATHS.order}/order/:id`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.put(`${API_PATHS.order}/order/:id/status`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
