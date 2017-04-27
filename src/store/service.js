import axios from 'axios'
import {getUrl} from  '../tool/urlTool'
import qs from 'qs'
import {tool} from '../tool/tool'
import {baseUrl} from '../config/env'
import {setpromisePost,setpromiseGet,setpromiseDelete,setpromisePut} from './conf'
const HostName = baseUrl







export const uploadImgUrl =  function(){
     let userId = 0
     if (getStore('token')){
         userId =  userId
     }
    return HostName +  'uploadImg/' + userId  + '/' + createToken()
 }

export const login = function(userName,password){
    const url =  HostName + 'login'
    return setpromisePost(url,{userName:userName,password:password})
}

export const register = function(dict){
    const url =  HostName + 'register'
    return setpromisePost(url,dict)
}

export const checkEmail = function(email){
    const url =  HostName + 'checkemail'
    return setpromisePost(url,{email:email})
}

export const validateUser = function(code){
    const url =  HostName + 'active/' + code
    return setpromiseGet(url)
}

export const ressendemail = function(user_id){
    const url =  HostName + 'resendemail/' + user_id
    return setpromiseGet(url)
}

export const getUserInfo = function(user_id){
    const url = HostName +  'user/' + user_id 
    return setpromiseGet(url)
}


export const getDynamics = function(user_id){
    const url = HostName +  'userdynamic/' + user_id 
    return setpromiseGet(url)
}

export const getUserComments = function(user_id){
    const url = HostName +  'usercomment/' + user_id 
    return setpromiseGet(url)
}



export const getTags = function(user_id){
    const url = HostName +  'tag/userid/' + user_id 
    return setpromiseGet(url)
}

export const addTag = function(tag){
    const url = HostName +  'tag/' + userId + '/' + createToken()
    return setpromisePost(url,{tag:tag})
}

export const deleteTag = function(tag){
    const url = HostName +  'tag/' + tag.tag_id + '/' + userId + '/' + createToken() 
    return setpromiseDelete(url)
}






export const getSorts = function(user_id){
    const url = HostName + 'sort/userid/' + user_id 
    return setpromiseGet(url)
}

export const addSort = function(sort){
    const url = HostName +  'sort/' + userId + '/' + createToken()
    return setpromisePost(url,{sort:sort})
}

export const deleteSort = function(sort){
    const url = HostName +  'sort/'  + sort.sort_article_id + '/' + userId + '/' + createToken() 
    return setpromiseDelete(url)
}

///api/articles/:userid/sort/:sortid/tag/:tagid/:index/:size': a


export const sortTagArticles = function(user_id,sort,tag,index = 0,size = 10){
    if(getType(tag) == "Array"){
        tag = tag.join('_')
    }
    const url = HostName +  'articles/'  + user_id + '/sort/' + sort + '/tag/' + tag +  '/' + index + '/' + size
    return setpromiseDelete(url)
}




export const saveArticle = function(article){
    if(article.articleId > 0){
        const url = HostName +  'article/'+ article.articleId + '/'+ userId + '/' + createToken()
        return setpromisePut(url,article)
    }
    else{
        const url = HostName +  'article/' + userId + '/' + createToken()
        return setpromisePost(url,article)
    }
    
}


export const deleteAticle = function(article){
     const url = HostName +  'article/'  + article.article_id + '/' + userId + '/' + createToken()
     return setpromiseDelete(url)
}

export const articleList = function(index,size){
    const url = HostName +  'article/' + userId + '/' + createToken() + '/' + index + '/' + size
    return setpromiseGet(url)
}

export const articleListWithSort = function(sortId,index = 0,size = 10){
    const url = HostName +  'articleswithsort/' + sortId + '/' + index + '/' + size
    return setpromiseGet(url)
}


export const articleById = function(article_id){
    const url = HostName +  'article/' + article_id
    return setpromiseGet(url)
}

export const saveTempArticle = function(article){
    const url = HostName +  'autosavearticle/' + userId + '/' + createToken()
    return setpromisePost(url,article)
 }
export const tempArticle = function(){
    const url = HostName +  'temparticle/' +  userId + '/' + createToken()
    return setpromiseGet(url)
}








export const getUserLinks = function(id){
    const url = HostName +  'link/' + id
    return setpromiseGet(url)
}

export const updateUserLinks = function(links){
    const url = HostName +  'link/' + userId + '/' + createToken()
    return setpromisePost(url,links)
}

export const updateFriendLinks = function(link){
    const url = HostName +  'link/'+ link.link_id +'/' + userId + '/' + createToken()
    return setpromisePost(url,link)
}
export const deleteLink = function(link_id){
    const url = HostName +  'link/'+ link_id +'/' + userId + '/' + createToken()
    return setpromiseDelete(url)
}

export const submitComment = (comment)=>{
    let url = HostName +  'comment'
    if(getStore('token')){
        url = HostName +  'comment/'+ userId + '/' + createToken()
    }
    return setpromisePost(url,comment)
}

export const getComment =(commentId)=>{
    let url = HostName +  'comment/'+ commentId 
    return setpromiseGet(url)
}





export const commentsByArticleId = (id)=>{
    let url = HostName +   'articleComment/'+ id 
    return setpromiseGet(url)
}