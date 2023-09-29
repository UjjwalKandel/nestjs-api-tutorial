import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  getBookmarkById(userId: number, bookmarkId: number) {
    return this.prisma.bookmark.findUnique({
      where: {
        userId,
        id: bookmarkId,
      },
    });
  }

  createBookmark(userId: number, dto: CreateBookmarkDto) {
    // return this.prisma.bookmark.create({
    //   data: {
    //     ...dto
    //   },
    // });
  }

  editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto) {}

  deleteBookmarkById(userId: number, bookmarkId: number) {}
}
