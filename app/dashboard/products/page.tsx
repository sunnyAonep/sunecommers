import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { MoreHorizontal, PlusCircleIcon, User2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ProductPage() {
  return (
    <>
    <div className='flex items-center justify-end'>
        <Button asChild className='flex gap-x-2'>
        <Link href={'products/create'}>
            <PlusCircleIcon/>
            <p>Add Product</p>
        </Link>
        </Button>
    </div>
    <Card className='mt-5'>
        <CardHeader>
            <CardTitle>Products:</CardTitle>
            <CardDescription>View your Products!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className='text-right'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <User2Icon className='h-12 w-12'/>
              </TableCell>
              <TableCell>Human</TableCell>
              <TableCell>$200</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>2024-05-03</TableCell>
              <TableCell className='text-right'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size={"icon"} variant={"ghost"}>
                        <MoreHorizontal className='h-4 w-4'/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
          </Table>
        </CardContent>
    </Card>
    </>
  )
}
