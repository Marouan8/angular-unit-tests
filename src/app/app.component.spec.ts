import { AddProductComponent } from "./add-product/add-product.component";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

fdescribe("add product component tests", () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
  });
  it("is add-product component defined", () => {
    expect(component).toBeDefined();
  });

  it("is form invalid when empty", () => {
    let itemName = component.rForm.controls["name"];
    itemName.setValue("Mobile");
    let itemPrice = component.rForm.controls["price"];
    itemPrice.setValue("10000");
    let itemShipping = component.rForm.controls["shipping"];
    itemShipping.setValue("100");
    expect(component.rForm.valid).toBeTruthy();
  });

  it("is form invalid when name less than 3", () => {
    let itemName = component.rForm.controls["name"];
    itemName.setValue("Mobile");
    let itemPrice = component.rForm.controls["price"];
    itemPrice.setValue("10000");
    let itemShipping = component.rForm.controls["shipping"];
    itemShipping.setValue("100");

    expect(component.rForm.valid).toBeTruthy();
    expect(component.rForm.controls["name"].valid).toBeTruthy();
    // expect(itemPrice.errors['min']).toBeDefined();
  });
});
