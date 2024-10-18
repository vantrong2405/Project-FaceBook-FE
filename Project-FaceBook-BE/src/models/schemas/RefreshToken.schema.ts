import { ObjectId } from 'mongodb'

interface RefreshTokentype {
  _id?: ObjectId
  token: string
  created_at?: Date
  user_id: ObjectId
  iat: number
  exp: number
}

export default class RefreshToken {
  _id?: ObjectId
  token: string
  created_at: Date
  user_id: ObjectId
  iat: Date
  exp: Date
  constructor({ _id, token, created_at, user_id, iat, exp }: RefreshTokentype) {
    this._id = _id
    this.token = token
    this.created_at = created_at || new Date()
    this.user_id = user_id
    this.iat = new Date(iat * 1000)
    this.exp = new Date(exp * 1000)
  }
}
