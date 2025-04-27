import React, {useCallback} from "react"
import { useForm } from "react-hook-form"
import {Button, Input, select, RTE } from "../index"
import appwriteService from "../../appwrite/mainConfig"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title ||  "",
            slug: post?.slug ||  "",
            content: post?.content ||  "",
            status: post?.status || "active",
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

     const submit = async(data) => {
        if(post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                appwriteService.deleteFile(post.featuredimage)
            }

            const dbPost = await appwriteService.updatePost
            (post.$id, {
                ...data,
                featuredimage: file ? file.$id : undefined,
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            } else {
                const file = await appwriteService.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id
                    data.featuredimage = fileId

                    await appwriteService.createPost({
                        ...data,
                    })
                }
            }
        }
     }

    return(
        <div>PostForm</div>
    )
}