// Copyright 2022 - 2023 Godwin peter .O (me@godwin.dev)
// 
// Licensed under the Reciprocal Public License (RPL-1.5) and Trace License;
// you may not use this file except in compliance with the License.
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using Proton.Common.Entity.Base;
using Trace.Common.Domain.Modules.Tag.Entities;

namespace Trace.Common.Domain.Common;

public abstract class CustomerEntity<T> : ExtendedEntity<T>, ITenantEntity<T>, ITaggedEntity<T>, ICustomerEntity<T> {
    public T? TenantId { get; set; }
    public T? CustomerId { get; set; }
    public ICollection<Tag>? Tags { get; set; }
}