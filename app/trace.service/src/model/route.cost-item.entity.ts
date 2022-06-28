import { Max } from 'class-validator';
import { Entity, ManyToOne, OneToOne, JoinColumn, Column } from 'typeorm';
import { TagEntity } from './base.tagged.entity';
import { RouteCost } from './route.cost.entity';
import { User } from './user.entity';

@Entity({ name: 'route_cost_items' })
export class RouteCostItem extends TagEntity {
  public approved: boolean;

  @ManyToOne(() => RouteCost, (route) => route.costItems)
  @JoinColumn()
  public cost: RouteCost;

  @OneToOne(() => User)
  @JoinColumn()
  public approvedBy: User;

  @Column({
    type: 'timestamptz',
    nullable: false,
  })
  public timeApproved: Date;

  @Column({ type: 'int', nullable: false })
  public value: number;

  @OneToOne(() => RouteCostItem)
  @JoinColumn()
  public previous: RouteCostItem;

  @Column({ type: 'int', nullable: false })
  @Max(100)
  public costPercentage: number;
}
