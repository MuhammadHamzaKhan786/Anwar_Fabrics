import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Filter } from "lucide-react";
import { mockData } from "@/lib/queryClient";

// Define Product type locally since we removed shared schema
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  imageUrl?: string;
  createdAt: string;
  inStock?: number;
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [location] = useLocation();

  // Handle URL parameters for category filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Use mock data instead of API calls
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Create extended mock product data with more fields


      const mockProducts: Product[] = [
        { id: 1, name: "Crystal Tissue Dupatta", price: 80.00, category: "crystal-tissue", description: "Elegant crystal tissue dupatta with intricate embroidery", imageUrl: "data:image/jpeg;base64,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", createdAt: "2023-05-15", inStock: 15 },
        { id: 2, name: "Dull Tissue Dupatta", price: 85.00, category: "dull-tissue", description: "Sophisticated dull tissue dupatta for everyday wear", imageUrl: "data:image/jpeg;base64,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", createdAt: "2023-06-20", inStock: 8 },
        { id: 3, name: "Chamak Net Bridal Dupatta", price: 90.00, category: "chamak-net", description: "Luxurious chamak net dupatta perfect for bridal wear", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRi3p9TpzWfgntF9sHdY_G4pJJsD-oWTSPQ&s", createdAt: "2023-07-10", inStock: 5 },
        { id: 4, name: "Dull Net Embroidered Dupatta", price: 75.00, category: "dull-net", description: "Beautifully embroidered dull net dupatta", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOa9n23vmQaqWTuG3NZSLLrVe-tORm5A-Grw&s", createdAt: "2023-08-05", inStock: 12 },
        { id: 5, name: "Premium Crystal Tissue", price: 80.00, category: "crystal-tissue", description: "Premium quality crystal tissue with gold work", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsHfjdOuZyQoPi0K1WzKFrLpP4muhjGz0Kzt-Xg_4cBa0muizOEVPlvtATEDiHsKkEHk&usqp=CAU", createdAt: "2023-09-12", inStock: 7 },
        { id: 6, name: "Designer Dull Tissue", price: 85.00, category: "dull-tissue", description: "Designer dull tissue with modern patterns", imageUrl: "data:image/jpeg;base64,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", createdAt: "2023-10-18", inStock: 10 },
        { id: 7, name: "Luxury Chamak Net", price: 90.00, category: "chamak-net", description: "Luxury chamak net dupatta with stunning embellishments", imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFRUXGBgXGBgYFxgXGBgXGBoaGBgXGhgaHSggHR0lGxkXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0fICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0uLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QAPBAAAQMCAwcCBgECBAYDAQAAAQACESExA0FRBBJhcYGR8KGxBRMiwdHh8TJCBhRSYiNygpKi4jNDwhX/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJxEAAgIBBQACAgEFAAAAAAAAAAECEQMEEiExQRNRIjIUQoGRsfD/2gAMAwEAAhEDEQA/APO4+M4MFzQDSAJBFAmmbJvOc4f0ObM1iaEivMoWDgPxDYxG8b2kSanKU78Pww1ha6CJPaHDLi1YpHuTlQHbtr3nAWIYGkyLhpF4nJc3Zd5uICLhwOcGT/7LbfqxDX6ZuJAvU8LrG/vOAubWEQBxzohiXHB634XtWG5rsPEIDmusSTJArEZUS3+J/hmE1hxJDSTRtKmZhouaFK7RtbMJu41jHb1DvCaAzJioFclx8Mf3vORz6gVsOSmeSuDXT6Vye9ul/sUw9ndP9JR2wJkj7+fhZ2j4k19OgvQSghtPpz0OV6rkbVns44yrhUGgkw0G3oLyiMBBqrwWkQ4it+ehniKowP2zrEgwBPoVmzqiYx2yBAEgwTreq7Xwz4mMNoqWvMkOBv8ATxsaCi5uEwGhFHAgTIg6wM6R25oTi0QDcU6LXHNxOXVYIZFTL+F7U7F2hwpWs0AF/qJ0qm/jHy8ANbhuL3E7z3T9MilAuVhYUbxFSRB76I21O3sMEn6myDyvIXTGaao8fNp5wlfg7swdi4D23aDAGl3TTikcI7+EWE1Y4uF7G/qu3/hAD5eJImSNNJzS+1YAw8feAo4QcxUclpXCZz7qbiJ7BtIA3XVGVhB981W3YAADpJB0S5kEtHbwIQdPHS6ynOlR16fB8kr8J82Iv+tEU7bMyDCGDF0ShCyWRs7p6WCfQNmPGuaMzb2gCGmczN0M4QhZGHyT+SRP8XE/BrYNvZhv3wIoaRImPyk9o2gvdv1kmTKpmHOgRd0AVHqk8khx0uO+jsfFfircZjG/LdLReQch+FxjEW/aZwGiw6fdW5tYv0SeST5sqGlxx4SLf8WcMPdiKQuWcY7pgD96pnbGyKCmuXFKkgAIUn2J4MSbjFAP8tiaqIu9/uUV/Ivox/iy+z2G3bYMOd0Qd3c/5QWkR/4Lzu1bbJO7MTxi9I7qviOO7ExHGLml6S4/lJ7Owb0HPkcp46FbtnmRjXYTZjN6XNL2Bj0T3w7Dgl5o2TBJikkG3MI+y7MLm1qTNyOtwr+Iv/4LAALin/M0E58CjpWUvzkoL0SB3nFxilecWFbpfbMUvpNPIWwJAAdQ1dGWUamkKYjBFPptS/Mz5dcUpH0WLGv7LoROzjim8LYgQN1xDpAuPYD3WmNgyCCet10ME7v92VZOpGmVQos22IDiDd0p148UEgudQelNcuqZxi48e/AxzHXPggBmVR3hIbkN4GUU0vWLJf4s0zvRAd4fX3VjKNOlo+6axB8zDkf21ictef4VRMsnKOPs2IQTBvROHEM2BolxhwU3iYUhosTQflUYnY+D7SGMGG0XdvE6/wBsV0lP47A9kG8TrYam2a4WwYm7isivy/8AyiJHX8L0WLBxMNw/oeJHIkiPVdmKVo8XW4vjyWjyW27K5rhBneEyqbs5APJek/xZsbWjDeAADvAgcFw8HEpHhosMnE2j0tIt2BSQj8vsqDsooExhsVYuHqsDvqzQINjlYrLa5ITQQU9g41MvvCtOzCUKAbwjK6EW7x5K3uk7tgFprwGkZpNjSLDt2x/KziOgc/ZVhOmqowZcbnjYaISsqUtqAPxpbuzTTJKYzkfGwzdLCqtnPHl0gUKJiiiizf4xjaMYtaTSXHhYgH3Cb/yn/BY8X66lv3CU+KshoH5pBcF2Q8DZKnkL33XDlVd6PmpOkqA4W1UIvQmaTMNd9ikdqcXFrQbzHcjLhkldlxnk/S2tW9wQj4fOOSxzSqNHfoMO7Lu+guBh5ZDXirdhVPDLTWi02gtTzzqpeo+9O9e64mfQovCAubD38hR2KTwHMi3nFW/e3QIgcLmeCmEzvGooDf8AuukJuuSw0RckmJy9iQaclQGQ8pCKzCEXsJ5Hz3C05tM8uVI86KjIT4+e9c09sOLDiKVkdDI6GClXtjvxnwQt4T45dfLyUWOrGW7OKzXdjwKb/wBe9MACQax5Va2vaCGtECDXqOXMHqk2S6ecmmg05q2+DNR/IKNoO+50/VMzr24Qurs+1BrDMlsS3/Y/eynI5rz+IYxCPzeOKYwdogkGS0gjlOauEqObPhUuGdj/ABHjy3BGdXRa4XIw3GP5Vbdjlxa0md0QDnGUoe+pyy3Ss20mP48SiGDyDTqMlTgSstNZ7ozqWUHQ1yD2i8css1l1JjTVFxcQmDkKD3hCxaz366IELYorIQjiLRQ4kpozcaHWxAHU/hL4v+rJFJIF7ws4mERxOitcIxlc5Cb3LM5InyHHLmt4eykaKGzojClwB3Vaa+RxPZRTaNdg7/iTBBAeBRwnlYz2K5bdrJwwzSBncNIT+ybUC0NxDAI//P6XNx9nhxi3rHhXoN+nysIO9no/8N2WZArJrTjP3KvEwIc5ton+Kd078JeGMc7MfcRHskHuJM5mpK5csrR7ekx7LS/5lvoCAeGVQYj0lRpqAOvnAEBU1smBGpHJMYezk1jLK3LuPRYHfZeDs8ma7tK/bLTtJUfhkE3rrOWdeR7LT8UAQa9qDq7ynBZfiRBAjz+UC5YxhM63Fsp42V4mH04GeuX4QsHEdOVPzOQK2/FFPBpqmRTFXg8qoQ8sfQnmmXDTzz7pd9OCBoYx64cjKvSxrCX2bHJkRNZ04dkfZniYMCkZ1BvNdDkMgq2fZSwSaw7dkehI480xpc2A2h0umIJvU369kQslsgIO0VPJawsYgEZG/wBk06M5QbF8R5nlRGwnd1h7arBEVChvk3jGlQ4x5Ks6cUqMThzWmEpWU4jhdDQAh+9Z4oW6UUYfGExUYcxqrDwxpomXYNzFNYN4mOajsMVh06d0CdGN3ha6j2Emg9uSKwtA4kHMXoQbWhafj2rUdRyTbJiqZbNiJiSOhBNcqclobG37kwIFMus9EvibQTST+Fn5lUD5Ol//ACh/rb/3BWuRJ1b6q0WFP7F/h2ytdBeZjLrH3CaME2EAcqxU+iT2PHIcQKGKG0Wr6J0uoALCpOZvXVdLn+NHkw07+Vz/AMA8Z8/SLAkqhhwJPLqtwYjzj2kqzbmeOZ6cey55O2elCKiqMBwDtBHDj0UfikxUWy00lDL5rz9fX1KximSATw1jlbgoNEvQ2DME651qBX2y5IuC2RvH0v8AhB2dhiOn3iO3QpkiaD2kyDOg4oGZY7kOdrGlQdVbiDcjlaBfIhaZhQSZyMXp1PCNbwlsXlbjnma+yYqLDxqZjpNa2OUU5q9/pYUOts5yPlErCI17qDeMaZcaSP3KAoJVpkc/JTGJjWmd0tNv9QzPTTggtqJjha1OV4OpKK0S06gSOECt9QZ8hCH4LATeo5VyrCp+GNY+3DmEVu7SJrWDANKETl1WhWg13ek+dkAkCIOnCdUF7E01uVq0E52FPLqnNpokaChoUfDgjjVZLFkEtNDlWNEDGhMjTT1z8siNaIJodNR/FO6HgOFDQEEzMnIwY8yR3tMy4GJrnBQS+y2DeALjLRSBQxp5qhubcDP2y6qPeKev590Mu7+fpMgjnfx7oLpP2WnOmtEJ7kAW40t557qt6FmSbLXyxz5oCyvmNUU3FEgtkwMECpHnNMHjU14jleEM40WjWaDtHnalfPAFNIsFoYV4g7ogk3EUv9+vfmgDEBMQOwH6sgOxazmtbwqRSedPXkc/spZojZ/GY97oQqZ8jJR78q3nNaBjLPyqRVh2kNaNdO8n2TOxit+GsT0SOlZpr5GaZ2SchPSeCBpDZbnNBGfT+7jHoLBJYr95xgRw9MkXHcaRJPQgxwjn6aIBIbQH34XQT6Zgc1l5JNOAyBoIFirb514wtbxrp/1IKCbKciKkR3jjfIdFtr4dNOOedeKJszZBpJNB0qaTnGY14ILhSiAXZs4eVxSv307qDDAkEiltCaTBzuVYEgE8J5dBGiqDM5IGjT2SSDeDaAKSStbk0mmXJZeYpF7Tw4g1WsF4jKM8iK2vpmkWugD2wT5VCe3+E5iCWj8a8Y4ZoHTzwoGAFE0zGpTWf5QXN6oYokAcum6G59OSw9yjcEm6oyboyX6KnYJzRRho7cIloz0TI5YDDbZF3RPnVFbsjs6c+KZwdlmZqBc2AvrkkX0K7g4K10pwf9I/7gojaKzzbsYzRClQiD3WXFMzNYYkouJiNEx0tPWlekKmjdbNJOVZA/aVJ3jwToTdDTcj55dbFKearB4aV8zr7K3KTRFsKfwrAV01p/PskcBk8p7JouyGdKxyifXqgdlF+ZrI8z8lBcKI2LFtFToiPOndCCQAeW+5Vt1/Cj/PIVN885IBHS2QSwDOaUBvOdNDc5HVDc2JFJ6fws7Fi5a2vfW94t01R8RsXP8AUJz5ID0CHfSaW7x7aKMdNLKMbXztXjks7w0/XX9ILRMYkGuVOKgNRfrHL2WMQ5aZ+ZflWw+p11OnokUhnfLnCpJJmL15TwUfhCKX4Ga2PLJRwFQaOmDAFLg04cEbc+mWmJi9K0sethKKFuEiDmI8p90Jw0oni30qQadINUHEwY+xHnkoGLikR5oisbNZjy/uoW5+nlslhh7Dz7JktWdAYDQJvWCK0OUmwr7KNcAT9UATQVyNPNUk7aiLeZRKC7FmJqnZCTs6DMYmAGibCBJP3QXYk2JQsMkRGWcrW9pCRouDW8dB6qKfMd5/KtKh2cfFMK8JkSTlkbk/gU7iJrAn3W3O3WxSsfwrOUztTrAZ37kfbNZwkMFGwKlMnth3Ok2sFHFZ3qytYYmTkPApNbGMNoArpPP1RGu3iOAAzygJd5NteVKjTp3R2mkcPZJjiR7r191BiHiBFYlYdKGXIRUi8VywrKpAkaYYXUwnBzbWqa1tcECI4EUAdWSFy2jL8JvY8WOWhrPplTqgTNWcOiy9okieXePZaxb3zpGnuf4W8TCrvGd0wTAiAYFNb/rNFFbhd1IrQo2Dg0r0ETJ72ifRax2W3TvgQCSN2SZAF5gRHSaLLmgAa86ZE2oLlFUNStBQIEQNZzgwQCenumdnxi0uaQLiQRWjqtEyLVqUo1xNLenD7K8M5SASAKxS00vKSBpNchvlANneMi4iQL3P/bab1iyoUvHDTnzorZiUjeIjpSS4VnWvRCJg6TFJ4kV8zQUgWI2KZSYnMA3QMTX385rpYrZAaQcgTIMcuEHWsBJ4uARW9vUT+eyA7Akisin7pCE4QeGXDmihqpojl1RY6L3lA/QFWQBYLQfnEospIxvHQKLX06+n7VpAcln9SxjuknMT5RFY+A7j6HI9p9EpK1RwSZtqPhBLhM4UW88qhhHs2/VEwhSchBPePugkyt42JSNa/ZSjSzTXSZPH9ZeQjTy9PLILWw3ifPZaY6UMcGGQltoJWCKpI0l0SFZarjh53Wm+WQyV0YDfPMkyzDIj7fhZw2ent2RWiSK16qkiG2xjaGyN7M8c6Wz4zqTosFogOJMQ4EC5nODlE80UYZDBzjPz+VjAYN0gxc3mOI1Fij0SuuDDcMQN10GZAJjSCTYEgg+BXtBoJ/qirqGauaIyiAB3utYmHhtktNiIbcQ4EEbwgyJvAS2CZNe3r9kpGkLfLNsfBny0ii0xoPQaVnSdFTQLd5+mK3PKQrYNLqTagotrna60HNNTQ1ik6GOknJBkgjzn90RjOAOXDO3mSQUGJAEUpl2z4+3MrbDNT0g70iwaYuYBveLIIaTNrWpoSaTw8lGY4xmADIraCIPST3TE0vAGLgVgCDYjMuiDHUFLOZnb28uuiwzcVnvE0PWPVVtEE1Ak7op/aIqNBlqgL8OawRTIx2qrDIzoc0fFwyK9dRYH2QWmKeGEirNS3/d2CixvjRRIZxdqpHETl0Swcq2t9ZAmVWysc60BdSg2eLk1CjKgzStB8SVQwRmSU18gBk05c0/jJ/k1yVgGk5FU7E3iDFoHQJc425ItNAed7LWGVm40dWPKpoZc+e63hlBaURrq+flSzeL5G22gIZafP4W8No5+c1twrlnkCpNX0QMpf3W2t0nLy/JYnz2VsHgQwiqDsHhF/VUGzlXLL7+SqwwTSlaZAdzZFwsI73qY/ge6LE4pBMSkDTPzjPp1Hsld6oFriRWkx2tPoiYxk0kTJr/E+9kvszoJmxFRMEjMUk/wiwS44Lx3yJgiKQLUqN45mpyWPk1ikm1deXH2RTiXg52Nde8U9EOPza+t+SCkipj6XTNMtQCKFWDB9u6t+7aM75560io7LD5aRI71yjmkUmGcIg6x0kuHO2aKzjHThBQQaAxeT+fXJTenrxmcroHYwDQAz116c/0sNcQMtctND4UMPpw49NFZcYvnMcbeBAUbOPcmsmSJvX8ozMUH0FKcI9SlD6eT1ornt6kJBQ6GUi0jgRP2pvWzWHbNvEAGSZMZ2BIjoeyD806zb7ouE+b/ALyJjsmJpoB/kvJVLp/OGp9FEhbmeA2h1JGXss4G0kCBSUD55zTmz4bdfNF3RTSPnMk4znaNseo/GJIvA/CKMMa5RfW8rX+VyBbW33SSZUpJIXxXA5S2NRQn35KYRyN10cH4WYkVHv2U2j4a6J3SIsYiVUoWjPFn2yF8Nba6qAw97FbC5WqPZhJNDuHi6eeiI59bJMYkJhmE50Uv/J6R2UM3TtGvmcltmJVBdhATN+3DTIoTXIKTOzs1SeVL5Vr0numgADNCaxlIvY14fwuRsr65VpFD6Quh89wjIGT0AivbNIpqyYzvqPkk617pVn9UZWhHea5x3KVa76uvmaASDuIyEHpelT69ll4in7oM5RWOm9rgDKtVjdkSKdqEg/gpgUACO88afpR8ukkkzcnUV+606Zn20pMdCt4WEJrSlRPSl+F0AKMBiBaTQ6mf/Wtq80ZxpT0NiOfWnBZcL0vr0t2PdUaVgxQfn7JUNM32PhCsjwdDQ6VVsgAnXzXmpNu1OqCkZI/a0Bw8srdiKPxaT6+qQWW1/wBzXLOkqSKidAPVDc6TeePKiovzN+PRMGyf5o/6lFe5/tHf9qJULceN+XJmI9k3g7OQJJolWOlOh4a2ok20XfI+Ww/ZgYbiN7X3v7LLHPNQ0wLUPdM4O0n6W03ZtEQKZiuS6WxbHH1j6QJrNB34KoxIyZGcnA257LOI9F19n/xHif3gO6cZSPxHF33wKgUBiJjM0VjDBAaMMEgcijnwKVcoL8S2zDf9bRDqbwyPGyWZ9Vq9O1UJmwkki2XD0RXYRad0SQLZ8aRlNVlkXp3aWX9PgbDcGzYk0qJA4ic00MQtaC4ihtTTOvLuue5wbBuT76IJxSblYUeisiQ6/FLjKtrUux4TOGeKmjVSs20x/CcDh9JHPK9LivRKHTzqiNdEcJ6+iRabQ4TEawNOFB0QHXrqjNsKi54cqT9ktiGv4SLTDMfF7ds69cltmJaxrefZBdiCTFPao4FQa2j7Jjsbe8ZRMZRyHt6ogA3eETIiT5VJMdBp5VFw8Q9/4SBr6C4jSMheL6EiIv8AwhuiZyjOOKI5wNsovw89VMQkmthblwnmmSAGHpST6e6ubb18uJpnmo9vnFUYjKnl0DTN7pPmVFGYROWX5qEJ02vohnGdTzikDkNNZFzf7/wVl7xkIjWvW3FAl1/PKoZk39cqfpMncMfN4jsogf5fh53UQTuPOt3s2jsi4zxT6Z8hL4JINCt42JW2S7X2fNw4gxhu0QQQ2oz/AEtv2tzrn8dkphY7R/bKKzbBlhgqjP3oJ8yOaf8Ah+yYjgXH6W5my52E7dM0kZXTeN8UxHXIjSynckbLE3y+hvaXwQ1lRToUttOOABETFR6Sgu25lhc34FWMcA713X4DohK3yXLJGKpCoxC691tqraMXeO9QHQflWw0WUlR2Ycm9chWNR2j0QcMooKzZ1RCn8K2vUmnXryWC4JUXuY+3G+mO3O2vkBZxyDWvVD2Z9CNQRUjUEXFDS/tnnHpBSaLjN2XiZxoPwPAqa+KKNx2GGH+qJHt9rK8RsUv4aKaNdwVjhz61ELWG8awOcRzolXD/AE1A8so3Fr3yRQbjoNf6Gsx6zyCK9+8OnnqEg12h9OOnVM4ZqDB/X5QF8ll9Tav8ojWda/qVH7tzyrTPzuhfO3nQKNEmaooNxnGdMR4aIYBCIQJ+3UflU7zzogTMb/nQcVT3+cK/lWbrJaUxGfm8+/7UWvlclEUTZwhsbYlrideBQ3NM9ksHwmsHaSIoDzXa+z5qH6tGiIA3sMRrZU3dyBlExXCvGvJBCl8msUo9lOdCA/e4ou5+kZ59dVSiRPK2c8uMpnB21zdDzEpn/Kh5JbSnqhO2F4EiCKW4p0Z2mWNrr/Q3sqw8WsWQThmYNFosUS5OnDLbyjoNKMwjmlMB80zTTPOSwZ6sJblaCtCtrEMqAwkWxvBtWsV79aZKY39MZ53/ABS/og7O+on85Iz2iCCNe8/ykwicn4jhk7pGVON1rZPicHdxAXccwi7QaDWYHNIYmzGZaa5zqtIJSXJy6nJLFK4ds7hDT9TDQ8e4MR7LDqTMi9J9jmuHgbcWGtPuuvsnxPDeC0w0nWx4zklLG0aYdXGfDdM3hv6+yYGOAIz9p9lg7NNJPbWiyMGPPRZ0djbNb5JraZjv+03hCAlgzlX75JxsR5p+UMIr1mSPOKw5bdiR55qgYj1JVhA/zssvHHzogvOi1s9TQSqohsJB8IVo/wDmeB7hROiN54hFYoout9Hz2PsM7JBbdRRKJrkGnqsWyii0ZysNsluo90X/AOw9FFEAuybZfqUm1RRRI6cX6msH+pPMUUWE+z09P+hv8LLr9VFFCN2a2e45j3TmJ/8AH/1O9gookNHO2j+g+ZJHEz5KKLXH0cWq/cT2qw5oGDdWotvDzJfuez+H/wBA/wCn2CmFY8z7KKLkfZ9JDpFYefJMtv0H3UUUvo0QB9z5mEMXUUSEwQ/C2LHl9wrUVEeAFFFFZB//2Q==", createdAt: "2023-11-05", inStock: 3 },
        { id: 8, name: "Embroidered Crystal Tissue", price: 80.00, category: "crystal-tissue", description: "Beautifully embroidered crystal tissue with border work", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_tBTI8j_0beLajIQDMU45JheCayN_Yps2gZztzRzJzQUPvOIbCVbgHh-RKuT7lKhKn0&usqp=CAU", createdAt: "2023-12-10", inStock: 9 },
        { id: 9, name: "Casual Dull Net", price: 1900, category: "dull-net", description: "Casual dull net dupatta for everyday elegance", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOZmUJMUlqhARCmmOPNNc0FaZBpfvAFZM5_eVs-OcqblTEeubAqL0IdV91Ny5E1Finhg&usqp=CAU", createdAt: "2024-01-15", inStock: 14 },
        { id: 10, name: "Wedding Special Chamak", price: 90.00, category: "chamak-net", description: "Special wedding collection chamak net with heavy work", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuCueusl1-lIMGgwEwbXncweQd9n52M8iZe4WSnwbj0_1qKqw2gt6h4BuqNSNojFE3EA&usqp=CAU", createdAt: "2024-02-20", inStock: 6 },
        { id: 11, name: "Premium Dull Tissue", price: 85.00, category: "dull-tissue", description: "Premium quality dull tissue with subtle patterns", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoAdnKBMtdv5vIKcA-4Oq7S01TS8ZHksFJKgrspEZEHTFrsvkWgJNWP-vqvpLDl93KCs&usqp=CAU", createdAt: "2024-03-25", inStock: 11 },
        { id: 12, name: "Designer Dull Net", price: 85.00, category: "dull-net", description: "Designer dull net with contemporary patterns", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4AdEMFDnaY5_QZASnC5S9jzOOr8u-RCqmU1e3gpjDojY0SHd62v-cuDY5T5zUm8zXTk&usqp=CAU", createdAt: "2024-04-30", inStock: 8 }
      ];
      
      // Filter by category if needed
      if (selectedCategory !== "all") {
        return mockProducts.filter(product => product.category === selectedCategory);
      }
      
      return mockProducts;
    },
  });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "crystal-tissue", label: "Crystal Tissue" },
    { value: "dull-tissue", label: "Dull Tissue" },
    { value: "chamak-net", label: "Chamak Net" },
    { value: "dull-net", label: "Dull Net" }
  ];

  const sortOptions = [
    { value: "name", label: "Name A-Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" }
  ];

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      "crystal-tissue": "Crystal Tissue",
      "dull-tissue": "Dull Tissue",
      "chamak-net": "Chamak Net",
      "dull-net": "Dull Net"
    };
    return categoryMap[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "crystal-tissue": "bg-purple-100 text-purple-800",
      "dull-tissue": "bg-blue-100 text-blue-800",
      "chamak-net": "bg-pink-100 text-pink-800",
      "dull-net": "bg-green-100 text-green-800"
    };
    return colorMap[category] || "bg-gray-100 text-gray-800";
  };

  const sortProducts = (products: Product[]) => {
    if (!products) return [];
    
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return a.name.localeCompare(b.name);
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Skeleton className="h-12 w-64 mb-4" />
            <Skeleton className="h-6 w-96" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <Skeleton className="h-40 w-full" />
            </div>
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-64 w-full" />
                    <div className="p-4">
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sortedProducts = sortProducts(products || []);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Dupatta Collection</h1>
          <p className="text-lg text-gray-600">
            Discover authentic imported material crafted with the finest materials and traditional techniques
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Quick Stats</h4>
                  <p className="text-sm text-gray-600">
                    {sortedProducts.length} products available
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product: Product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getCategoryColor(product.category)}>
                            {getCategoryLabel(product.category)}
                          </Badge>
                          {product.inStock && product.inStock > 0 ? (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              In Stock
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-red-600 border-red-600">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="text-2xl font-bold text-pink-600">
                          RS: {product.price.toFixed(2)}
                        </div>
                        {product.inStock !== undefined && product.inStock > 0 && product.inStock <= 5 && (
                          <p className="text-xs text-orange-600 mt-2">
                            Only {product.inStock} left in stock!
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
