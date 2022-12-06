export interface Post {
  userId: string,
  userName: string,
  userImage: string,
  userProfession: string,
  content: {
    text: string,
    image: string,
  },
}
