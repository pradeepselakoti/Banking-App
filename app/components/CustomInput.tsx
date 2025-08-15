import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const CustomInput = ({form ,name, label, placeholder}) => {
  return (
    <div> 
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='form-label'>
                {label}
              </FormLabel>
              <div className='flex w-full flex-col'>
                <FormControl>
                  <Input placeholder={placeholder}
                  className='input-class'
                  {...field}
                  />
                </FormControl>
                <FormMessage className='form-message mt-2' />
              </div>
            </FormItem>
          )}
        />
        
        </div>
  )
}

export default CustomInput