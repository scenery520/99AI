import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ExportExcelChatlogDto {
  @ApiProperty({ example: 1, description: '查询页数', required: false })
  @IsOptional()
  page: number;

  @ApiProperty({ example: 10, description: '每页数量', required: false })
  @IsOptional()
  size: number;

  @ApiProperty({
    example: '您好',
    description: '用户询问的问题',
    required: false,
  })
  @IsOptional()
  prompt: string;

  @ApiProperty({
    example: 'aiweb@aiweb.com',
    description: '用户邮箱',
    required: false,
  })
  @IsOptional()
  email: string;
}
