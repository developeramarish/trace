import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { TagEntity } from '@/common/entity/base.tag.entity';
import { ProductModel } from '@/module/product/entity/product.model.entity';
import { StockPurchaseRequest } from './stock.purchase-request.entity';

@Entity({ name: 'stock_purchase_items' })
export class StockPurchaseItem extends TagEntity {
  @OneToOne(() => ProductModel)
  @JoinColumn()
  public product: ProductModel;

  @Column({ nullable: true })
  public productId!: string;

  @ManyToOne(() => StockPurchaseRequest, (request) => request.items)
  @JoinColumn()
  public request: StockPurchaseRequest;

  @Column({ nullable: true })
  public requestId!: string;

  @Column({ type: 'int', default: 1 })
  public quantity: number;

  @Column({ type: 'int', default: 1 })
  public price: number;

  @Column({ type: 'int', default: 1 })
  public discount: number;
}
