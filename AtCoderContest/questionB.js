JsOsaDAS1.001.00bplist00�Vscripto( / /kԏ[��a a0O�R)N
0e�[WR!��MR0xY	c� 
 v a r   t a r g e t _ a   =   ' w @ @ @ ' 
 v a r   t a r g e t _ l i s t _ a   =   t a r g e t _ a . s p l i t ( ' ' ) 
 / /kԏ[��a b0TN
0 
 v a r   t a r g e t _ b   =   ' @ @ d e ' 
 v a r   t a r g e t _ l i s t _ b   =   t a r g e t _ b . s p l i t ( ' ' ) 
 
 / / @0LY	c�0Y0�0S0h0L0g0M0�e�[W0n�MR 
 v a r   c h a n g e _ s t r   =   [ " c " , " o " , " d " , " e " ] 
 
 / /0]0�0]0��w0U0Lup0j0c0f0D0_0���0Q 
 i f   ( t a r g e t _ l i s t _ a . l e n g t h   ! =   t a r g e t _ l i s t _ b . l e n g t h ) 
 { 
 	 c o n s o l e . l o g   ( " Y o u   l o s e " ) 
 } 
 
 / /[��a0n�MR0n�w0UR f o re�0�V�0Y 
 v a r   l i s t _ l e n g t h   =   t a r g e t _ l i s t _ a . l e n g t h ; 
 f o r   ( v a r   i = 0 ;   i < l i s t _ l e n g t h ;   i + + ) 
 { 
 	 / / @  0K0d  kԏ[��a0ne�[W0LY	c�S��0j0�0]0ne�[W0kY	c� 
 	 i f   ( t a r g e t _ l i s t _ a [ i ]   = =   ' @ '   & &   ( c h a n g e _ s t r . i n d e x O f ( t a r g e t _ l i s t _ b [ i ] )   ! =   - 1 ) ) 
 	 { 
 	 	 t a r g e t _ l i s t _ a [ i ]   =   t a r g e t _ l i s t _ b [ i ] 
 	 } 
 
 	 i f   ( t a r g e t _ l i s t _ b [ i ]   = =   ' @ '   & &   ( c h a n g e _ s t r . i n d e x O f ( t a r g e t _ l i s t _ a [ i ] )   ! =   - 1 ) ) 
 	 { 
 	 	 t a r g e t _ l i s t _ b [ i ]   =   t a r g e t _ l i s t _ a [ i ] 
 	 } 	 
 } 
 
 i f   ( t a r g e t _ l i s t _ a . t o S t r i n g ( )   = =   t a r g e t _ l i s t _ b . t o S t r i n g ( ) ) 
 { 
 	 c o n s o l e . l o g   ( " Y o u   w i n " ) 
 } 
 e l s e 
 { 
 	 c o n s o l e . l o g   ( " Y o u   l o s e " ) 
 }                              fjscr  ��ޭ