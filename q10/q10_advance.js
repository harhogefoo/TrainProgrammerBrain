JsOsaDAS1.001.00bplist00�Vscriptoj v a r   e u r o p e a n   =   [ 0 , 3 2 , 1 5 , 1 9 , 4 , 2 1 , 2 , 2 5 , 1 7 , 3 4 , 6 , 2 7 , 1 3 , 3 6 , 1 1 , 3 0 , 8 , 2 3 , 1 0 , 5 , 2 4 , 1 6 , 3 3 , 1 , 2 0 , 1 4 , 3 1 , 9 , 2 2 , 1 8 , 2 9 , 7 , 2 8 , 1 2 , 3 5 , 3 , 2 6 ] 
 v a r   a m e r i c a n   =   [ 0 , 2 8 , 9 , 2 6 , 3 0 , 1 1 , 7 , 2 0 , 3 2 , 1 7 , 5 , 2 2 , 3 4 , 1 5 , 3 , 2 4 , 3 6 , 1 3 , 1 , 0 0 , 2 7 , 1 0 , 2 5 , 2 9 , 1 2 , 8 , 1 9 , 3 1 , 1 8 , 6 , 2 1 , 3 3 , 1 6 , 4 , 2 3 , 3 5 , 1 4 , 2 ] 
 
 f u n c t i o n   s u m _ a r r a y _ w i t h _ c o u n t ( a r y ,   n )   { 
 	 v a r   m a x _ s u m = 0 
 	 v a r   f i r s t _ s l i c e _ a r y   =   a r y . s l i c e ( 0 ,   n ) 
 	 
 	 f o r   ( v a r   n u m   o f   f i r s t _ s l i c e _ a r y )   { 
 	 	 m a x _ s u m   + =   n u m 
 	 } 
 	 v a r   t m p   =   m a x _ s u m 
 	 
 	 f o r   ( v a r   i = 0 ;   i < a r y . l e n g t h ;   i + + )   { 
 	 	 t m p   + =   a r y [ ( i + n )   %   a r y . l e n g t h ] 
 	 	 t m p   - =   a r y [ i ] 
 	 	 
 	 	 i f   ( t m p   >   m a x _ s u m )   { 
 	 	 	 m a x _ s u m   =   t m p 
 	 	 } 
 	 } 
 	 
 	 r e t u r n   m a x _ s u m 
 } 
 
 v a r   m i n _ n   =   2 
 v a r   m a x _ n   =   3 6 
 
 v a r   r e s u l t   =   0 
 f o r   ( v a r   n = m i n _ n ;   n < = m a x _ n ;   n + + )   { 
 	 v a r   e _ s u m   =   s u m _ a r r a y _ w i t h _ c o u n t ( e u r o p e a n ,   n ) 
 	 v a r   a _ s u m   =   s u m _ a r r a y _ w i t h _ c o u n t ( a m e r i c a n ,   n ) 
 	 c o n s o l e . l o g ( " n = " + n + "0nfB   e _ s u m   :   " + e _ s u m + "   /   a _ s u m   :   " + a _ s u m ) 
 	 i f   ( e _ s u m   <   a _ s u m )   { 
 	 	 r e s u l t + + 
 	 } 
 } 
 
 c o n s o l e . l o g ( " r e s u l t   :   " + r e s u l t )                              �jscr  ��ޭ