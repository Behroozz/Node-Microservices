import {
  postComment
} from './controllers'

const response = postComment({
  author: 'Behrooz',
  text: 'Hi MicroService,,,,'
})

console.log('response', response)