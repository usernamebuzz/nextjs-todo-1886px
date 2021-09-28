import Link from 'next/link'
import { Select } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react"

export default function todo_Details() {
    return (
    <>
    <FormControl id="day">
    <FormLabel>Day</FormLabel>
    <Select placeholder="Select a day">
        <option value="option1">Monday</option>
        <option value="option2">Tuesday</option>
        <option value="option3">Wednesday</option>
        <option value="option4">Thursday</option>
        <option value="option5">Friday</option>
        <option value="option6">Saturday</option>
        <option value="option7">Sunday</option>
    </Select>
    </FormControl>
        <h4>
            <Link href="/">
                <a>back to the list</a>
            </Link>
        </h4>
    </>
    )
}