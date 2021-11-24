import gql from "graphql-tag";
export const CREATE_USER = gql`
mutation register(
    $firstName : String ! 
    $lastName:String                                                                                        
    $email:String
    $password:String)
    {
    register(
      firstName : $firstName
      lastName : $lastName                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      email : $email
      password : $password
    )
}
`
export const LOGIN = gql`
mutation login(
    $email:String
    $password:String)
    {
    login(
      email : $email
      password : $password
    )
}

`


