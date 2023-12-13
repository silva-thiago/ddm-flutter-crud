import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly firebaseService: FirebaseService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest<Request>();
    const [prefix, token] = request.headers.authorization?.split(' ');

    if (prefix !== 'Bearer') {
      throw new UnauthorizedException(
        'You are not authorized to access this resource.',
      );
    }

    if (!token) {
      throw new UnauthorizedException(
        'You are not authorized to access this resource.',
      );
    }

    return this.firebaseService.verifyToken(token);
  }
}
