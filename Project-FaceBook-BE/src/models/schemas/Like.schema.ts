import { ObjectId } from 'mongodb'

interface LikeType {
  _id?: ObjectId
  user_id: ObjectId
  post_id: ObjectId
  created_at?: Date
}
export default class Like {
  _id: ObjectId
  user_id: ObjectId
  post_id: ObjectId
  created_at?: Date
  constructor({ _id, user_id, post_id, created_at }: LikeType) {
    this._id = _id || new ObjectId()
    this.user_id = user_id
    this.post_id = post_id
    this.created_at = created_at || new Date()
  }
}
