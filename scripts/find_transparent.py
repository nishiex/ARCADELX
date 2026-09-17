from PIL import Image
p='public/images/Kiosk_Machine_With Embalem_01_Transparent_Middle.png'
im=Image.open(p).convert('RGBA')
px=im.load()
W,H=im.size
minx=W;miny=H;maxx=0;maxy=0
for y in range(H):
    for x in range(W):
        if px[x,y][3]==0:
            if x<minx: minx=x
            if y<miny: miny=y
            if x>maxx: maxx=x
            if y>maxy: maxy=y
if minx<=maxx:
    print('transparent_bbox_pixels:', minx, miny, maxx, maxy)
    print('width,height:', maxx-minx+1, maxy-miny+1)
    print('as percentages: left={:.6f}%, top={:.6f}%, width={:.6f}%, height={:.6f}%'.format(minx/W*100,miny/H*100,(maxx-minx+1)/W*100,(maxy-miny+1)/H*100))
else:
    print('no fully transparent pixels found; scanning for nearly-transparent...')
    # try alpha < 10
    minx=W;miny=H;maxx=0;maxy=0
    for y in range(H):
        for x in range(W):
            if px[x,y][3]<10:
                if x<minx: minx=x
                if y<miny: miny=y
                if x>maxx: maxx=x
                if y>maxy: maxy=y
    if minx<=maxx:
        print('near-transparent_bbox_pixels:', minx, miny, maxx, maxy)
        print('width,height:', maxx-minx+1, maxy-miny+1)
        print('as percentages: left={:.6f}%, top={:.6f}%, width={:.6f}%, height={:.6f}%'.format(minx/W*100,miny/H*100,(maxx-minx+1)/W*100,(maxy-miny+1)/H*100))
    else:
        print('no transparent region detected')
