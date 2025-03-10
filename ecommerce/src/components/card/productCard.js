import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProductCard({
    title,
    productDesc,
    priceType,
    price,
    onlyLeft,
    image,
    onClick
}) {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg',marginTop:3 }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={image}
            srcSet={image}
            loading="lazy"
            alt="No Img"
            style={{height:'auto',maxWidth:'100%'}}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{title}</Typography>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ 
            fontWeight: 'md', 
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: 'block', 
            width: '150px' /* Adjust width as needed */
          }}
        
          
          
        >
          {productDesc}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              {priceType}
            </Chip>
          }
        >
         {price}
        </Typography>
        <Typography level="body-sm">
          (Only <b>{onlyLeft}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg" onClick={onClick}>
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
