import { HttpHeaders, HttpInterceptorFn, HttpParams } from '@angular/common/http';

export const defineHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("doing a request...")
  const fakeToken =
    '6AjFaUJddQYyVAi8HdEAA2mR6VjGGccrk4F3c0uVMMW2RyFZtaDhyTwu0YEdk1o3';
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + fakeToken)
  .set('fake-header-param', 'fake-value');


  const params = new HttpParams()
  .set("param", "param_value")

  const reqWithHeader = req.clone({ headers });
  return next(reqWithHeader);
};
