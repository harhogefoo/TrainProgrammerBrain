JsOsaDAS1.001.00bplist00�Vscripto� / /R�u;0n���tV�ep 
 v a r   k   =   2 
 / /TR�u;0n r a t e0n l i s t 
 v a r   a n i m a t i o n _ r a t e _ l i s t   =   [ 1 0 0 0 ,   1 5 0 0 ] 
 / /[��a0n r a t e 
 v a r   r a t e   =   0 . 0 
 
 / /R�u;ep <���tV�ep0o N G 
 i f   ( k   >   a n i m a t i o n _ r a t e _ l i s t . l e n g t h ) 
 { 
 	 k   =   a n i m a t i o n _ r a t e _ l i s t . l e n g t h 
 } 
 
 / * 
   *  g Y' r a t e0k0Y0�0_0�0kON r a t e0nR�u;0�R0�ch0f0� 
   *  �M�0�0�0�0 !�0 ���tV�epN�N
0n i n d e x0kOMn0Y0�epP$0�RJ�d 
   * / 
 a n i m a t i o n _ r a t e _ l i s t . s o r t ( f u n c t i o n ( a , b ) 
 { 
 	 i f (   a   >   b   )   r e t u r n   - 1 ; 
         i f (   a   <   b   )   r e t u r n   1 ; 
         r e t u r n   0 ; 
 } ) ; 
 a n i m a t i o n _ r a t e _ l i s t . s p l i c e ( k ,   a n i m a t i o n _ r a t e _ l i s t . l e n g t h - k ) 
 
 / /ON0D r a t e0nR�u;0K0����t0Y0�0_0�0kf�0k0�0�0�0Y0� 
 a n i m a t i o n _ r a t e _ l i s t . s o r t ( f u n c t i o n ( a , b ) 
 { 
 	 i f (   a   <   b   )   r e t u r n   - 1 ; 
         i f (   a   >   b   )   r e t u r n   1 ; 
         r e t u r n   0 ; 
 } ) ; 
 
 / / r a t e0n�{� 
 f o r   ( v a r   i = 0 ;   i < k ;   i + + ) 
 { 
 	 r a t e   =   ( r a t e + a n i m a t i o n _ r a t e _ l i s t [ i ] ) / 2 . 0 
 } 
 
 c o n s o l e . l o g ( " a n s   :   "   +   r a t e )                                bjscr  ��ޭ