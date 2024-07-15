import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Orders:</CardTitle>
        <CardDescription>Custemers Orders:</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Custemer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className='font-medium'>Sunny Arbiv</p>
                <p className='hidden md:flex text-sm text-muted-foreground'>test@gmail.com</p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Sucessful</TableCell>
              <TableCell>2024-05-03</TableCell>
              <TableCell className='text-right'>$250</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
