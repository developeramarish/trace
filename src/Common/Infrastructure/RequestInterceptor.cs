// Copyright 2022 - 2023 Godwin peter .O (me@godwin.dev)
// 
// Licensed under the Reciprocal Public License (RPL-1.5) and Trace License;
// you may not use this file except in compliance with the License.
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using System.Text;
using HotChocolate.AspNetCore;
using HotChocolate.Execution;
using Microsoft.AspNetCore.Http;

namespace Trace.Common.Infrastructure;

public class RequestInterceptor : DefaultHttpRequestInterceptor {
    public override ValueTask OnCreateAsync(
        HttpContext context,
        IRequestExecutor requestExecutor,
        IQueryRequestBuilder requestBuilder,
        CancellationToken cancellationToken) {
        string domain = context.Request.Host.Host;
        string scheme = context.Request.Scheme;
        string delimiter = Uri.SchemeDelimiter;
        string fullUrl = scheme + delimiter + context.Request.Host.Value;
        context.Session.Set("Domain", Encoding.UTF8.GetBytes(domain));
        // TODO: Set session cache with an object

        requestBuilder.SetGlobalState("Domain", domain);
        requestBuilder.SetGlobalState("Scheme", scheme);
        requestBuilder.SetGlobalState("BaseUrl", fullUrl);
        // requestBuilder.SetProperty("TenantId", "");
        // requestBuilder.SetProperty("CustomerId", "");
        // requestBuilder.SetProperty("UserId", "");

        return base.OnCreateAsync(context, requestExecutor, requestBuilder, cancellationToken);
    }
}