import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  id;
  invoice;
  carrier;
  title;
  TrackingNumber;
  coming;
  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private tos:ToasterService,
    private router:Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {
    this.getOrder();
    this.carrier="DHL";
    
  console.log(this.id);
  }
  getOrder() {
    console.log("object");
    this.api.getSpecificOrder(this.id).subscribe(res => {
      console.log(res);
      this.invoice = res;

      this.title=this.invoice.title;
      this.TrackingNumber=this.invoice.trackingNumber;
      this.carrier=this.invoice.carrier;
    })
  }
  change(event: any) {
    let val = event.target.value;
    this.carrier = val;
  }
  update() {
    this.api.getSpecificOrder(this.id).subscribe(res=>{

this.coming=res;
console.log(this.coming);

      let data = {
        "id": this.coming.id,
        "userid": this.coming.userid,
        "orderId": this.coming.orderId,
        "image": "./image.jpg",
        "orderPlaced": "2019-02-15",
        "forDelivery": "2019-03-05",
        "trackingNumber": this.TrackingNumber,
        "customerName": this.coming.customerName,
        "deliveryStatus": this.coming.deliveryStatus,
        "orderStatus": this.coming.orderStatus,
        "totalPrice": this.coming.totalPrice,
        "invoiceNo": this.coming.invoiceNo,
        "customerEmail": this.coming.customerEmail,
        "shippingEmail": this.coming.shippingEmail,
        "billingAddress": this.coming.billingAddress,
        "shippingAddress": this.coming.shippingAddress,
        "billingPhone": this.coming.billingPhone,
        "netTotal": this.coming.netTotal,
        "subTotal": this.coming.subTotal,
        "Discount": this.coming.Discount,
        "vat": this.coming.vat,
        "carrier":this.carrier,
        "title":this.title,
        "products": [
          {
            "itemName": "Origin License",
            "Description": "Extended License",
            "unitCost": 1000,
            "quantity": 5,
            "total": 5000
          },
          {
            "itemName": "Origin License",
            "Description": "Extended License",
            "unitCost": 1000,
            "quantity": 5,
            "total": 5000
          },
          {
            "itemName": "Origin License",
            "Description": "Extended License",
            "unitCost": 1000,
            "quantity": 5,
            "total": 5000
          },
          {
            "itemName": "Origin License",
            "Description": "Extended License",
            "unitCost": 1000,
            "quantity": 5,
            "total": 5000
          }
        ]
      }

      this.api.updateOrder(this.id,data).subscribe(res=>{
        this.tos.showSuccess('Updated')
        this.router.navigate(['/dashboard/vieworders']);
      })
    })
  




  }
}
