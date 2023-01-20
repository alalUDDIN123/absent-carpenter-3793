import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../../Components/Products_Page/ProductCard";
import { ProductFilter } from "../../Components/Products_Page/ProductFilter";
let sampleData = `{
  "phones": [
    {
      "id": 1100,
      "image1": "https://rukminim1.flixcart.com/image/312/312/jzrb53k0pkrrdj/mobile/g/2/y/mtr-ferrari-ferrari-original-imafhg8myrfcxet5.jpeg?q=70",
      "image2": "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/c/7/mtr-ferrari-ferrari-original-imafhg7a8sem2bkh.jpeg?q=70",
      "image3": "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/p/z/mtr-ferrari-ferrari-original-imafhg8eh8w4kmx3.jpeg?q=70",
      "images1": [
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/g/2/y/mtr-ferrari-ferrari-original-imafhg8nunazyusy.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/g/2/y/mtr-ferrari-ferrari-original-imafhg8n8pcmhzyu.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/g/2/y/mtr-ferrari-ferrari-original-imafhg8nthavsgak.jpeg?q=70"
      ],
      "images2": [
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/c/7/mtr-ferrari-ferrari-original-imafhsaw264tvtf5.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/c/7/mtr-ferrari-ferrari-original-imafhg78skhvfdg2.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/c/7/mtr-ferrari-ferrari-original-imafhg78dy4gjneu.jpeg?q=70"
      ],
      "images3": [
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/p/z/mtr-ferrari-ferrari-original-imafhg8e8rxkhcms.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/p/z/mtr-ferrari-ferrari-original-imafhg8f6ge7guxd.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/jzrb53k0pkrrdj/mobile/z/p/z/mtr-ferrari-ferrari-original-imafhg8fzgxcjzve.jpeg?q=70"
      ],
      "name": "MTR Ferrari  (Yellow)",
      "name2": "MTR Ferrari  (Red)",
      "name3": "MTR Ferrari  (Black)",
      "_brand": "Motorola",
      "_customer_ratings": 4.1,
      "ratedCount": "6,221 Ratings",
      "review": "450 Reviews",
      "basicSpecification": "4 GB ROM | 64 MB RAM",
      "_ram_capacity": [
        "64 MB"
      ],
      "_internal_storage": [
        "4 GB"
      ],
      "display": "4.5 cm (1.77 inch) Display",
      "_screen_size": 1.77,
      "camera": "0.3MP Rear Camera",
      "_primary_camera": 0.3,
      "secondary_camera": null,
      "_battery_capacity": "800 mAh Battery",
      "processorSpecification": "12 Months",
      "_processor_brand": "",
      "_speciality": "",
      "network_type": "2G",
      "_sim_type": "Dual Sim",
      "purchasePrice": "1,200",
      "discountPrice": "1,300",
      "sellPrice": "1,370",
      "_discount": 5,
      "_diliveryMethod": "Free delivery",
      "assured": "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
      "offer1": "Only few left",
      "offer2": "Bank Offer",
      "waranty": "",
      "diliveryBy": "",
      "topDiscount": "",
      "including": "",
      "dealers": "Alal Uddin ",
      "postedQuantity": 20,
      "remainQuantity": 15,
      "profit": 500
    },
    {
      "id": 1101,
      "image1": "https://rukminim1.flixcart.com/image/312/312/kyyqpow0/mobile/f/s/i/pova-neo-le6-tecno-original-imagb2pfv3jjyrhz.jpeg?q=70",
      "image2": "https://rukminim1.flixcart.com/image/416/416/kylvr0w0/mobile/u/q/4/pova-neo-le6-tecno-original-imagatye3ymtmcpt.jpeg?q=70",
      "image3": "",
      "images1": [
        "https://rukminim1.flixcart.com/image/416/416/kyoqmq80/mobile/p/m/k/pova-neo-le6-tecno-original-imagaverut5nxzqm.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kyoqmq80/mobile/q/a/6/pova-neo-le6-tecno-original-imagaverffegzegf.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kyoqmq80/mobile/j/h/e/pova-neo-le6-tecno-original-imagaver7nt6eyfm.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kyoqmq80/mobile/p/w/5/pova-neo-le6-tecno-original-imagaverrjzgbchf.jpeg?q=70"
      ],
      "images2": [
        "https://rukminim1.flixcart.com/image/416/416/kylvr0w0/mobile/x/i/y/pova-neo-le6-tecno-original-imagatyegkdgzesq.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/kylvr0w0/mobile/r/s/4/pova-neo-le6-tecno-original-imagatyejnmwvzdy.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/l0cr4i80/mobile/3/w/k/pova-neo-le6-tecno-original-imagc5362aw5y8hc.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/l0cr4i80/mobile/b/k/f/pova-neo-le6-tecno-original-imagc536xazpk9jn.jpeg?q=70"
      ],
      "images3": [],
      "name": "Tecno Pova Neo (Geek Blue, 128 GB)",
      "name2": "Tecno Pova Neo (Obsidian Black, 128 GB)  (6 GB RAM)",
      "name3": "",
      "_brand": "POCO",
      "_customer_ratings": 4.1,
      "ratedCount": "635 Ratings",
      "review": "51 Reviews",
      "basicSpecification": "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "_ram_capacity": [
        "4 GB",
        "6 GB"
      ],
      "_internal_storage": [
        "64 GB ",
        "128 GB"
      ],
      "display": "17.27 cm (6.8 inch) HD+ Display",
      "_screen_size": 6.8,
      "camera": "13MP Rear Camera | 8MP Front Camera",
      "_primary_camera": 13,
      "secondary_camera": 8,
      "_battery_capacity": "6000 mAh Battery",
      "processorSpecification": "Helio G25 Processor",
      "_processor_brand": "Helio",
      "_speciality": "Long-Lasting Battery",
      "network_type": "3G",
      "_sim_type": "Dual Sim(Hybrid)",
      "purchasePrice": "10,000",
      "discountPrice": "10,279",
      "sellPrice": "10,891",
      "_discount": 5,
      "_diliveryMethod": "Free delivery",
      "assured": "",
      "offer1": "Bank Offer",
      "offer2": "",
      "waranty": "One Year Warranty for Handset, 6 Months for Accessories",
      "diliveryBy": "",
      "topDiscount": "",
      "including": "",
      "dealers": "Shubham Verma",
      "postedQuantity": 15,
      "remainQuantity": 12,
      "profit": 837
    },
    {
      "id": 1102,
      "image1": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/p/x/-original-imagk4nz54s7a7rf.jpeg?q=70",
      "image2": "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/q/j/-original-imagk4nzwhudqhcz.jpeg?q=70",
      "image3": "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/m/q/e/-original-imagk4nz6xgtexam.jpeg?q=70",
      "images1": [
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/h/f/v/-original-imagk4nzfzr8acq9.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/o/i/-original-imagk4nzxgehvcfs.jpeg?q=70"
      ],
      "images2": [
        "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/b/l/p/-original-imagk4nzanyhcjkj.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/a/p/x/-original-imagk4nzg95bfx2n.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/w/w/t/-original-imagk4nz754ggycc.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/7/s/b/-original-imagk4nz5fxfyrg8.jpeg?q=70"
      ],
      "images3": [
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/z/h/r/-original-imagk4nzm6cusgdv.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/c/n/t/-original-imagk4nz9ckhqccg.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/4/a/x/-original-imagk4nz5m9varvh.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/k/a/q/-original-imagk4nz8kx4bnys.jpeg?q=70"
      ],
      "name": "REDMI 10 (Caribbean Green, 128 GB)",
      "name2": "REDMI 10 (Midnight Black, 128 GB)  (6 GB RAM)",
      "name3": "REDMI 10 (Pacific Blue, 128 GB)  (6 GB RAM)#JustHere",
      "_brand": "Mi",
      "_customer_ratings": 4.2,
      "ratedCount": "21,907 Ratings",
      "review": "1,627 Reviews",
      "basicSpecification": "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "_ram_capacity": [
        "4 GB",
        "6 GB"
      ],
      "_internal_storage": [
        "64 GB ",
        "128 GB"
      ],
      "display": "17.02 cm (6.7 inch) HD+ Display",
      "_screen_size": 6.7,
      "camera": "50MP + 2MP | 5MP Front Camera",
      "_primary_camera": 50,
      "_secondary_camera": 5,
      "_battery_capacity": "6000 mAh Lithium Polymer Battery",
      "processorSpecification":"Qualcomm Snapdragon 680 Processor",
      "_processor_brand": "Snapdragon",
      "_speciality": "Long-Lasting Battery",
      "_network_type": "4G",
      "_sim_type": "Dual Sim",
      "purchasePrice": "10,500",
      "discountPrice": "10,999",
      "sellPrice": "16,999",
      "_discount": 35,
      "_diliveryMethod": "Delivery by",
      "assured": "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
      "offer1": "Top Discount on Sale",
      "offer2": "",
      "waranty": "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
      "diliveryBy": "2 PM, Tomorrow",
      "topDiscount": "10,350",
      "including": "Off on Exchange",
      "dealers": "Hari Singh Bisht",
      "postedQuantity": 40,
      "remainQuantity": 25,
      "profit": 7485
    }
  ]
}`;

const data = JSON.parse(sampleData).phones;

function Products() {
  return (
    <Box>
      {data && (
        <SimpleGrid templateColumns="20% 80%">
          <ProductFilter data={data} />
          <Box>
            {data.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Products;
