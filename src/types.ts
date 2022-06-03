type UserType = {
  image: string
  name: string
  username: string
}

type ReplyType = {
  content: string
  replyingTo: string
  user: UserType
}

type CommentType = {
  content: string
  id: number
  replies?: ReplyType[]
  user: UserType
}

export type ProductFeedbackType = {
  category: string
  comments?: CommentType[]
  description: string
  id: number
  status: string
  title: string
  upvotes: number
}

export type RequestProductFeedbackType = {
  data: ProductFeedbackType[]
}
