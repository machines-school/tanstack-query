# Todo List (useQuery)

```tsx
import { useQuery } from "@tanstack/react-query";

export default function Todo() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()),
  });
   
  return (
    // Rest of the code
  )
}
```

`queryKey` คือ คีย์ที่ใช้ในการระบุข้อมูลที่ต้องการดึงมา
- ช่วยแยกแยะระหว่าง query ต่างๆ และจัดการสถานะแยกจากกัน
- สามารถ cache ข้อมูลได้ ถ้าเราใช้งาน query เดียวกันซ้ำๆ จะไม่ต้องดึงข้อมูลจาก API อีก

`queryFn` คือ ฟังก์ชันที่ใช้ในการดึงข้อมูลจากแหล่งข้อมูลที่ต้องการ เช่น API, Database, หรืออะไรก็ได้ โดยฟังก์ชันนี้ควรเป็น function ที่สามารถ return ข้อมูลได้





