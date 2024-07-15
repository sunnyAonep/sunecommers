'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { UploadDropzone } from '@/lib/uploadthing'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <form action="">
        <div className='flex items-center gap-4'>
            <Button variant={"outline"} size={"icon"}>
                <Link href={'/dashboard/products'}>
                <ChevronLeft className='w-4 h-4'/>
                </Link>
            </Button>
            <h1 className='text-xl font-semibold tracking-tight'>New Products</h1>
        </div>
        <Card className='mt-5'>
            <CardHeader>
            <CardTitle>Product Detailes</CardTitle>
            <CardDescription> In this form you can  make your product!</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-3'>
                    <Label>Name:</Label>
                    <Input type='text' className='w-full' placeholder='Product name...'></Input>
                </div>
                <div className='flex flex-col gap-3'>
                    <Label>Description:</Label>
                    <Textarea className='w-full' placeholder='Write Your description right here'></Textarea>
                </div>
                <div className='flex flex-col gap-3'>
                    <Label>Price:</Label>
                    <Input type='number' className='w-full' placeholder='$55'></Input>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Label>Featured Product</Label>
                    <Switch/>
                </div>
                <div className='flex flex-col gap-3'>
                    <Label>Status</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Statuse"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='draft'>Draft</SelectItem>
                            <SelectItem value='published'>Published</SelectItem>
                            <SelectItem value='archived'>Archived</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex flex-col gap-3'>
                    <Label>Images</Label>
                    <UploadDropzone endpoint="imageUploader" onClientUploadComplete={(res) => {
                        alert("Finish uplouding")
                    }}
                    onUploadError={(res)=>{
                        alert("Something went worng")
                    }}/>
                </div>
                </div>
            </CardContent>
            <CardFooter>
              <Button>Create Product</Button>  
            </CardFooter>
        </Card>
    </form>
  )
}
