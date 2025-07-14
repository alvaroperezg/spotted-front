import { useMutation, useQuery } from "@tanstack/react-query"
import { createOrder,getClientSecret,downloadPhotos,getOrders,getOrderById,deleteOrder } from "@/services/api/orders/orders"

export const useCreateOrder = () =>
  useMutation({
    mutationFn: (photoIds: string[]) => createOrder(photoIds),
  })

export const useGetClientSecret = (orderId: string, enabled = true) =>
  useQuery({
    queryKey: ["clientSecret", orderId],
    queryFn: () => getClientSecret(orderId),
    enabled,
  })

export const useDownloadPhotos = (orderId: string, enabled = true) =>
  useQuery({
    queryKey: ["downloadPhotos", orderId],
    queryFn: () => downloadPhotos(orderId),
    enabled,
  })

export const useGetOrders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  })

export const useGetOrderById = (orderId: string, enabled = true) =>
  useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderById(orderId),
    enabled,
  })

export const useDeleteOrder = () =>
  useMutation({
    mutationFn: (orderId: string) => deleteOrder(orderId),
  })
